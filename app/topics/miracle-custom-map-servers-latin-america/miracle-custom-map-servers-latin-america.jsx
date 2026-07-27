import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-latin-america');
}

export default function MiracleCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-latin-america" />;
}
