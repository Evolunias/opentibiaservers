import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-mexico');
}

export default function OtmadnessRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-mexico" />;
}
