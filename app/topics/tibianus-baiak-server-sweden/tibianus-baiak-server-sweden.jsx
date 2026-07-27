import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-sweden');
}

export default function TibianusBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-sweden" />;
}
