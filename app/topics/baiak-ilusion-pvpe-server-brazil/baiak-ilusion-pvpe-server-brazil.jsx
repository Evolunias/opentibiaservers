import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-brazil');
}

export default function BaiakIlusionPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-brazil" />;
}
