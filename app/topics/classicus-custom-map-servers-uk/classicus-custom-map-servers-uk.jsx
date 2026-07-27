import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-uk');
}

export default function ClassicusCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-uk" />;
}
