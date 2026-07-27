import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-europe');
}

export default function ClassicusCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-europe" />;
}
