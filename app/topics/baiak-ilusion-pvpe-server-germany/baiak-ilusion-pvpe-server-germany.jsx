import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-germany');
}

export default function BaiakIlusionPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-germany" />;
}
