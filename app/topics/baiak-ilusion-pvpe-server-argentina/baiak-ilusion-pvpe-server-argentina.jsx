import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-argentina');
}

export default function BaiakIlusionPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-argentina" />;
}
