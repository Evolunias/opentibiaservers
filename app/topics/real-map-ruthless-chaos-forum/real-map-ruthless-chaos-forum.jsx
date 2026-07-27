import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-forum');
}

export default function RealMapRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-forum" />;
}
