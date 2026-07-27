import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-europe');
}

export default function OtmadnessRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-europe" />;
}
