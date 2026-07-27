import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-europe');
}

export default function MarolaotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-europe" />;
}
