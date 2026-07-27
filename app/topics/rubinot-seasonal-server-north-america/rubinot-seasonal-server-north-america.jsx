import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-north-america');
}

export default function RubinotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-north-america" />;
}
