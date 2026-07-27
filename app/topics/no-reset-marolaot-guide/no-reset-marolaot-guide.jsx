import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-guide');
}

export default function NoResetMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-guide" />;
}
