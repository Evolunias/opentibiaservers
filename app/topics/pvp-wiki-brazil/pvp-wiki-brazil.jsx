import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-brazil');
}

export default function PvpWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-brazil" />;
}
