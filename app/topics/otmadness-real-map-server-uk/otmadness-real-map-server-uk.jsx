import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-uk');
}

export default function OtmadnessRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-uk" />;
}
