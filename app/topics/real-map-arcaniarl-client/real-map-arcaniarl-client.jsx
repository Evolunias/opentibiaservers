import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-client');
}

export default function RealMapArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-client" />;
}
