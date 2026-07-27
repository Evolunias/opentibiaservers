import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-server');
}

export default function RealMapEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-server" />;
}
