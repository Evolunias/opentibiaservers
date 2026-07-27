import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-brazil');
}

export default function LowExpWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-brazil" />;
}
