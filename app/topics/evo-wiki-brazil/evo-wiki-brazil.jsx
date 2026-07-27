import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-brazil');
}

export default function EvoWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-brazil" />;
}
