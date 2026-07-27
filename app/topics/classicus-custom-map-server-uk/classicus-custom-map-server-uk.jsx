import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-uk');
}

export default function ClassicusCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-uk" />;
}
