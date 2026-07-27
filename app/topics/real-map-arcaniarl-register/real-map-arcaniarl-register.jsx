import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-register');
}

export default function RealMapArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-register" />;
}
