import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-argentina');
}

export default function RealMapForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-argentina" />;
}
