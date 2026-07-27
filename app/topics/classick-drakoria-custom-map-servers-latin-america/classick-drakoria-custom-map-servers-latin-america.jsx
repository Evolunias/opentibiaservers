import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-latin-america');
}

export default function ClassickDrakoriaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-latin-america" />;
}
