import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-guide');
}

export default function CustomMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-guide" />;
}
