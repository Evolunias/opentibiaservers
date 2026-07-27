import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-forum');
}

export default function RealMapCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-forum" />;
}
