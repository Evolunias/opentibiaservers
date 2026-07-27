import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-canada');
}

export default function ClassicusCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-canada" />;
}
