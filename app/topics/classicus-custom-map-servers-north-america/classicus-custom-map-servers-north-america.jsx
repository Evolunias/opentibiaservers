import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-north-america');
}

export default function ClassicusCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-north-america" />;
}
