import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-wiki-chile');
}

export default function PvpEnforcedWikiChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-wiki-chile" />;
}
