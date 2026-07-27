import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-latin-america');
}

export default function MiracleCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-latin-america" />;
}
