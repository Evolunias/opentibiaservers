import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-usa');
}

export default function RealMapForumUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-usa" />;
}
