import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-north-america');
}

export default function TibianusSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-north-america" />;
}
