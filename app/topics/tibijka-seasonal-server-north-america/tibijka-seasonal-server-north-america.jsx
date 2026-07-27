import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-north-america');
}

export default function TibijkaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-north-america" />;
}
