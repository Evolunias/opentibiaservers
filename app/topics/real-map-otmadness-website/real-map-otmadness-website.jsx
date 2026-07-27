import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-website');
}

export default function RealMapOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-website" />;
}
