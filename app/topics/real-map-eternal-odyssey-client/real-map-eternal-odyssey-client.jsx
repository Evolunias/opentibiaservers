import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-client');
}

export default function RealMapEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-client" />;
}
