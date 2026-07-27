import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-servers-usa');
}

export default function OtmadnessCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-servers-usa" />;
}
