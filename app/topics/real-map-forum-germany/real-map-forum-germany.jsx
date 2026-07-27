import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-germany');
}

export default function RealMapForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-germany" />;
}
