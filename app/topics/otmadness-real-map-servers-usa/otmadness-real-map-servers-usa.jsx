import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-usa');
}

export default function OtmadnessRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-usa" />;
}
