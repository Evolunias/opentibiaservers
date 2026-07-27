import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-south-america');
}

export default function TibianusSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-south-america" />;
}
