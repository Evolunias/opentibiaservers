import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-mexico');
}

export default function BaiakIlusionPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-mexico" />;
}
