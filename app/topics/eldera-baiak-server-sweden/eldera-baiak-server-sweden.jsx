import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-sweden');
}

export default function ElderaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-sweden" />;
}
