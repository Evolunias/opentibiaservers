import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-brazil');
}

export default function PvpEnforcedWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-brazil" />;
}
