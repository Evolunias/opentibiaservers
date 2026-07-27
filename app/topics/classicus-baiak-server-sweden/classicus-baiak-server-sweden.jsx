import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-sweden');
}

export default function ClassicusBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-sweden" />;
}
