import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-ot-server');
}

export default function RealMapArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-ot-server" />;
}
