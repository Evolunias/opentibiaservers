import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-uk');
}

export default function NonPvpForumUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-uk" />;
}
