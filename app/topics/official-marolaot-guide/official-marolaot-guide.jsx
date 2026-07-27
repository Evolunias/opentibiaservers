import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-guide');
}

export default function OfficialMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-guide" />;
}
