import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-mexico');
}

export default function ClassicusFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-mexico" />;
}
