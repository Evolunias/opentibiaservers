import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-north-america');
}

export default function ClassicusCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-north-america" />;
}
