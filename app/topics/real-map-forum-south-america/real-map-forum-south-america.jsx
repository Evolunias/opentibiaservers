import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-forum-south-america');
}

export default function RealMapForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-forum-south-america" />;
}
