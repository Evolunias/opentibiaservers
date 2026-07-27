import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-germany');
}

export default function PvpEnforcedForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-germany" />;
}
