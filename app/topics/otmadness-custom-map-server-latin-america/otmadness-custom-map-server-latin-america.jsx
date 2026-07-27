import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-latin-america');
}

export default function OtmadnessCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-latin-america" />;
}
