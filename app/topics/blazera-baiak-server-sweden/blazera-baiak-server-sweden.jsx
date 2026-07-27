import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-sweden');
}

export default function BlazeraBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-sweden" />;
}
