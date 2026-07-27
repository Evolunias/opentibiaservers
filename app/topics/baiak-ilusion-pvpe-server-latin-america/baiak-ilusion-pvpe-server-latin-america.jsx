import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe-server-latin-america');
}

export default function BaiakIlusionPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe-server-latin-america" />;
}
