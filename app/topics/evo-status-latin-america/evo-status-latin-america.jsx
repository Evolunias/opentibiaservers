import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-latin-america');
}

export default function EvoStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-status-latin-america" />;
}
