import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-argentina');
}

export default function NonPvpForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-argentina" />;
}
