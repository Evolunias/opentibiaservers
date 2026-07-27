import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-uk');
}

export default function ClassicusFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-uk" />;
}
