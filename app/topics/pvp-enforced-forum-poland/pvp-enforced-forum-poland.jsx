import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-poland');
}

export default function PvpEnforcedForumPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-poland" />;
}
