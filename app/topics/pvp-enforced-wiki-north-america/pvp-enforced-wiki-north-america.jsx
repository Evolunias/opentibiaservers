import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-north-america');
}

export default function PvpEnforcedWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-north-america" />;
}
