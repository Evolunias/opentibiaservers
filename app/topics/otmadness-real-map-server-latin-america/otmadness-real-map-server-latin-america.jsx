import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-latin-america');
}

export default function OtmadnessRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-latin-america" />;
}
