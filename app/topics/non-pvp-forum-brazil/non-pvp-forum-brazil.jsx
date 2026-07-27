import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-brazil');
}

export default function NonPvpForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-brazil" />;
}
