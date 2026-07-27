import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-official');
}

export default function RealMapEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-official" />;
}
