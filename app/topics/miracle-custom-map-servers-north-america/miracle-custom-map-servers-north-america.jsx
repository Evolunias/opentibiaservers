import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-north-america');
}

export default function MiracleCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-north-america" />;
}
