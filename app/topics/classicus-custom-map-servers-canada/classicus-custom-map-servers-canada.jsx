import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-canada');
}

export default function ClassicusCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-canada" />;
}
