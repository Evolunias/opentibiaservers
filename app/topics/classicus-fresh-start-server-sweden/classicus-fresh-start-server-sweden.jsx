import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-sweden');
}

export default function ClassicusFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-sweden" />;
}
