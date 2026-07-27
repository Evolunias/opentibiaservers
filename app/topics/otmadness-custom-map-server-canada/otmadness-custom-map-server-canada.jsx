import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-canada');
}

export default function OtmadnessCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-canada" />;
}
