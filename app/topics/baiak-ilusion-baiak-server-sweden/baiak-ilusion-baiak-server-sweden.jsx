import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-sweden');
}

export default function BaiakIlusionBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-sweden" />;
}
