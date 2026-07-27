import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-north-america');
}

export default function OtmadnessRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-north-america" />;
}
