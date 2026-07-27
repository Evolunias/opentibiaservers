import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-sweden');
}

export default function OlderaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-sweden" />;
}
