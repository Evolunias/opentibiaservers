import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-forum');
}

export default function RealMapTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-forum" />;
}
