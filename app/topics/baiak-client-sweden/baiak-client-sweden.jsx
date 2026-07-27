import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-sweden');
}

export default function BaiakClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-sweden" />;
}
