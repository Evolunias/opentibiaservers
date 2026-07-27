import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-forum');
}

export default function RealMapAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-forum" />;
}
