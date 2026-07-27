import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-brazil');
}

export default function HighExpWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-brazil" />;
}
