import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-forum');
}

export default function ActiveRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-forum" />;
}
