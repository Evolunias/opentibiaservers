import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-forum');
}

export default function RealMapShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-forum" />;
}
