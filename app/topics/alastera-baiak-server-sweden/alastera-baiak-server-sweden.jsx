import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-sweden');
}

export default function AlasteraBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-sweden" />;
}
