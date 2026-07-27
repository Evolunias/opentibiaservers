import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-map');
}

export default function OtmadnessMapKeywordPage() {
  return <StaticKeywordPage slug="otmadness-map" />;
}
