import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-season');
}

export default function MarolaotSeasonKeywordPage() {
  return <StaticKeywordPage slug="marolaot-season" />;
}
