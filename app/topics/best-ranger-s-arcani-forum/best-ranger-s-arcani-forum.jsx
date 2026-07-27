import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-forum');
}

export default function BestRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-forum" />;
}
