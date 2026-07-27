import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-forum');
}

export default function RealMapRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-forum" />;
}
