import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-usa');
}

export default function PvpEnforcedWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-usa" />;
}
