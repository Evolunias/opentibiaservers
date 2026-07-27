import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-canada');
}

export default function RealMapForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-canada" />;
}
