import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-brazil');
}

export default function ClassicusFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-brazil" />;
}
