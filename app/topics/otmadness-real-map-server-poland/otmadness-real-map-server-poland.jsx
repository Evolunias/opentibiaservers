import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-poland');
}

export default function OtmadnessRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-poland" />;
}
