import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-latin-america');
}

export default function ClassicusCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-latin-america" />;
}
