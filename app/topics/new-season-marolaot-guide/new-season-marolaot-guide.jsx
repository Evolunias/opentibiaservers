import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-guide');
}

export default function NewSeasonMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-guide" />;
}
