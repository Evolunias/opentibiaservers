import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-mexico');
}

export default function ClassicusCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-mexico" />;
}
