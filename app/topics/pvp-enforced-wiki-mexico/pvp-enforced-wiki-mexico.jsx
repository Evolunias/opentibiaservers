import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-mexico');
}

export default function PvpEnforcedWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-mexico" />;
}
