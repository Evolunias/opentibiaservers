import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-north-america');
}

export default function PvpEnforcedForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-north-america" />;
}
