import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-south-america');
}

export default function PvpEnforcedWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-south-america" />;
}
