import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-brazil');
}

export default function BaiakWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-brazil" />;
}
