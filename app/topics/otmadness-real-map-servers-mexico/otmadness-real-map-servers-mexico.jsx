import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-mexico');
}

export default function OtmadnessRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-mexico" />;
}
