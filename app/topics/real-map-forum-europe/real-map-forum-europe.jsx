import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-europe');
}

export default function RealMapForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-europe" />;
}
