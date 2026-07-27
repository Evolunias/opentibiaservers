import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-usa');
}

export default function BaiakIlusionPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-usa" />;
}
