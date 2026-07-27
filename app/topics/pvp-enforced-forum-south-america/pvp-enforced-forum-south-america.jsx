import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-south-america');
}

export default function PvpEnforcedForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-south-america" />;
}
