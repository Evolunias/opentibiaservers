import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-forum');
}

export default function RealMapThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-forum" />;
}
