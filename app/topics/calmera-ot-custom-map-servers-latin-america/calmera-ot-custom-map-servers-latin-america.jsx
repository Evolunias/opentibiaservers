import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-latin-america');
}

export default function CalmeraOtCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-latin-america" />;
}
