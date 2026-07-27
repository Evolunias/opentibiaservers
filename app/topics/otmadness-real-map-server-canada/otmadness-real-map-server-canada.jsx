import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-canada');
}

export default function OtmadnessRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-canada" />;
}
