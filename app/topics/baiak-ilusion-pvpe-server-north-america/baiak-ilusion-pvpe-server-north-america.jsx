import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-north-america');
}

export default function BaiakIlusionPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-north-america" />;
}
