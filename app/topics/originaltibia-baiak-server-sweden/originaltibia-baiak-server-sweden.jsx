import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-sweden');
}

export default function OriginaltibiaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-sweden" />;
}
