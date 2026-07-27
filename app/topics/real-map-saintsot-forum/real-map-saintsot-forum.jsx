import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-forum');
}

export default function RealMapSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-forum" />;
}
