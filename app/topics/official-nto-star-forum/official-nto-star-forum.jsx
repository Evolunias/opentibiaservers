import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-forum');
}

export default function OfficialNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-forum" />;
}
