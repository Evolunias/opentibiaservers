import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-usa');
}

export default function NonPvpForumUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-usa" />;
}
