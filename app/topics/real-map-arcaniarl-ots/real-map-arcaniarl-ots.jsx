import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-ots');
}

export default function RealMapArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-ots" />;
}
