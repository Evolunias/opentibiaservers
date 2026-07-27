import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-sweden');
}

export default function OxygenotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-sweden" />;
}
