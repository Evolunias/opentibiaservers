import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-forum');
}

export default function RealMapTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-forum" />;
}
