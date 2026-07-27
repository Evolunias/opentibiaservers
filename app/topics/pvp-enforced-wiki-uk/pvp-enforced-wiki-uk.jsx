import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-uk');
}

export default function PvpEnforcedWikiUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-uk" />;
}
