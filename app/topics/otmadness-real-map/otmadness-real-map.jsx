import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map');
}

export default function OtmadnessRealMapKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map" />;
}
