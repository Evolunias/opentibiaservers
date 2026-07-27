import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-europe');
}

export default function PvpEnforcedWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-europe" />;
}
