import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-canada');
}

export default function ClassicusFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-canada" />;
}
