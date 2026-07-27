import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-canada');
}

export default function OtmadnessRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-canada" />;
}
