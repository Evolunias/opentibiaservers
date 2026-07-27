import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-guide');
}

export default function NewMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-guide" />;
}
