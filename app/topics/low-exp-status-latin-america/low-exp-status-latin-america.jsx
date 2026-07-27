import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-latin-america');
}

export default function LowExpStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-latin-america" />;
}
