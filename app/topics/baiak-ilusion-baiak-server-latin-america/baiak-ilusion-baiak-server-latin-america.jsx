import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-latin-america');
}

export default function BaiakIlusionBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-latin-america" />;
}
