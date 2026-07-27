import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-servers-latin-america');
}

export default function OtmadnessCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-servers-latin-america" />;
}
