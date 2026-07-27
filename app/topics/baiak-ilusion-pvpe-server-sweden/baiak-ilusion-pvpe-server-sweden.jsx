import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-sweden');
}

export default function BaiakIlusionPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-sweden" />;
}
