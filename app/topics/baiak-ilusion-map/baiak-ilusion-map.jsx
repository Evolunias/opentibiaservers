import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-map');
}

export default function BaiakIlusionMapKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-map" />;
}
