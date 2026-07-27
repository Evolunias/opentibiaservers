import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-forum');
}

export default function PopularRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-forum" />;
}
