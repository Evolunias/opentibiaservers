import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-brazil');
}

export default function PvpeWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-brazil" />;
}
