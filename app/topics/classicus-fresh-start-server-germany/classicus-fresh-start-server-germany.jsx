import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-germany');
}

export default function ClassicusFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-germany" />;
}
