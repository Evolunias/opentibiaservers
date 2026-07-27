import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-poland');
}

export default function NonPvpForumPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-poland" />;
}
