import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-south-america');
}

export default function TibijkaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-south-america" />;
}
