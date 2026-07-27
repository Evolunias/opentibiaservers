import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-north-america');
}

export default function OtmadnessCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-north-america" />;
}
