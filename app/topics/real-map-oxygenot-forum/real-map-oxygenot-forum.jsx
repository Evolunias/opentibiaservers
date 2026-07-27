import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-forum');
}

export default function RealMapOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-forum" />;
}
