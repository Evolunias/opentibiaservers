import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-forum');
}

export default function RealMapImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-forum" />;
}
