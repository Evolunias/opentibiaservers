import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-brazil');
}

export default function FreshStartWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-brazil" />;
}
