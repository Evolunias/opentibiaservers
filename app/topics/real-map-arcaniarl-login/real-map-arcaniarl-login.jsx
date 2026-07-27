import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-login');
}

export default function RealMapArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-login" />;
}
