import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-south-america');
}

export default function BaiakIlusionPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-south-america" />;
}
