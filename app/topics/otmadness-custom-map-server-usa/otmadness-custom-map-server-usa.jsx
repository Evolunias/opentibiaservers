import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-usa');
}

export default function OtmadnessCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-usa" />;
}
