import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey');
}

export default function RealMapEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey" />;
}
