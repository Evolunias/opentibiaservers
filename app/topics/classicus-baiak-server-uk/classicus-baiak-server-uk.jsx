import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-uk');
}

export default function ClassicusBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-uk" />;
}
