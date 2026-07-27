import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-europe');
}

export default function NonPvpForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-europe" />;
}
