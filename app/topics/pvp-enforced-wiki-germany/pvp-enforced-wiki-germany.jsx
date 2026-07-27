import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-germany');
}

export default function PvpEnforcedWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-germany" />;
}
