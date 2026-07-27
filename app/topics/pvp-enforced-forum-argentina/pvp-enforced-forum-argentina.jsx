import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-argentina');
}

export default function PvpEnforcedForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-argentina" />;
}
