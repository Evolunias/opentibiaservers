import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-sweden');
}

export default function RealMapForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-sweden" />;
}
