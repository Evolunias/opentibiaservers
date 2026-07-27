import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvpe');
}

export default function BaiakIlusionPvpeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvpe" />;
}
