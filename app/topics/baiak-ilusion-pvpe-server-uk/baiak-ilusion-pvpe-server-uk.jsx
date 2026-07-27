import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-uk');
}

export default function BaiakIlusionPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-uk" />;
}
