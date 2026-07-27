import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-poland');
}

export default function PvpEnforcedWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-poland" />;
}
