import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-latin-america');
}

export default function HighExpStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-latin-america" />;
}
