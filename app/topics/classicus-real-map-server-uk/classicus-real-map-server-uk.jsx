import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-uk');
}

export default function ClassicusRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-uk" />;
}
