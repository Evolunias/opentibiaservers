import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-forum');
}

export default function PopularCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-forum" />;
}
