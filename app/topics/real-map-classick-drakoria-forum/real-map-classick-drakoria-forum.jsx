import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-forum');
}

export default function RealMapClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-forum" />;
}
