import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-germany');
}

export default function NonPvpForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-germany" />;
}
