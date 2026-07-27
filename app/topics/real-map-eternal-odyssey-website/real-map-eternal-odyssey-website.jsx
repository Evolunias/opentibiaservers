import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eternal-odyssey-website');
}

export default function RealMapEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-eternal-odyssey-website" />;
}
