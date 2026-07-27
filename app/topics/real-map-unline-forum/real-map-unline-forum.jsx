import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-forum');
}

export default function RealMapUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-forum" />;
}
