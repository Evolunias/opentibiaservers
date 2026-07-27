import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-sweden');
}

export default function MediviaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-sweden" />;
}
