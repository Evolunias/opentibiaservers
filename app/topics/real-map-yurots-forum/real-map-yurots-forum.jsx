import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-forum');
}

export default function RealMapYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-forum" />;
}
