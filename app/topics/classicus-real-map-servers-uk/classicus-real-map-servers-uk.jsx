import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-uk');
}

export default function ClassicusRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-uk" />;
}
