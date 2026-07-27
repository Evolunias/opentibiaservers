import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-mexico');
}

export default function ClassicusCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-mexico" />;
}
