import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-latin-america');
}

export default function PvpEnforcedWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-latin-america" />;
}
