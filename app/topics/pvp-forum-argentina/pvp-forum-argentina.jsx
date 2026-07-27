import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-argentina');
}

export default function PvpForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-argentina" />;
}
