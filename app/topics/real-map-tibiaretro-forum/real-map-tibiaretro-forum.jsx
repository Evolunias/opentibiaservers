import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-forum');
}

export default function RealMapTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-forum" />;
}
