import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-canada');
}

export default function BaiakIlusionPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-canada" />;
}
