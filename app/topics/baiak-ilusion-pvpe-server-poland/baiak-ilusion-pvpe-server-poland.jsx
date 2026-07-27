import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-poland');
}

export default function BaiakIlusionPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-poland" />;
}
