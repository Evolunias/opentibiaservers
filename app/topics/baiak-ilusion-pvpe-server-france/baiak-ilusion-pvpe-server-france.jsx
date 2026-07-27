import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-france');
}

export default function BaiakIlusionPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-france" />;
}
