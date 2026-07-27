import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-brazil');
}

export default function RubinotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-brazil" />;
}
