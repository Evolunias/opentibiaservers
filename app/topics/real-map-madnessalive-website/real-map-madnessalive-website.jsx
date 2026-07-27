import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-website');
}

export default function RealMapMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-website" />;
}
