import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-brazil');
}

export default function MarolaotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-brazil" />;
}
