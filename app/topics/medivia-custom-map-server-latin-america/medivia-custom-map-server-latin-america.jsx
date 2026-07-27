import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-latin-america');
}

export default function MediviaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-latin-america" />;
}
