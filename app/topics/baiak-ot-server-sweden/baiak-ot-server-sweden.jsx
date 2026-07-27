import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-sweden');
}

export default function BaiakOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-sweden" />;
}
