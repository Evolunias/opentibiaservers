import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-argentina');
}

export default function PvpEnforcedWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-argentina" />;
}
