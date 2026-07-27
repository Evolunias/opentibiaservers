import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-forum');
}

export default function RealMapArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-forum" />;
}
