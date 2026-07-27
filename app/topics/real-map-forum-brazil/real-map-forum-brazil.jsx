import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-brazil');
}

export default function RealMapForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-brazil" />;
}
