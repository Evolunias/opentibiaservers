import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-argentina');
}

export default function ClassicusFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-argentina" />;
}
