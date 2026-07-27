import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-uk');
}

export default function MarolaotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-uk" />;
}
