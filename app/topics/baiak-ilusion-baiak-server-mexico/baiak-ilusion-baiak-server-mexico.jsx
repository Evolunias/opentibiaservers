import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-mexico');
}

export default function BaiakIlusionBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-mexico" />;
}
