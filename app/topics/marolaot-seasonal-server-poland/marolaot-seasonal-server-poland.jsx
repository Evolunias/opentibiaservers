import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-poland');
}

export default function MarolaotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-poland" />;
}
