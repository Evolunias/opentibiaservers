import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-mexico');
}

export default function RubinotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-mexico" />;
}
