import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-latin-america');
}

export default function MediviaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-latin-america" />;
}
