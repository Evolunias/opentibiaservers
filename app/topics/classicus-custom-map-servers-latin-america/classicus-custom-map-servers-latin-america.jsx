import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-latin-america');
}

export default function ClassicusCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-latin-america" />;
}
