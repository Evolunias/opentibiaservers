import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-north-america');
}

export default function BaiakIlusionRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-north-america" />;
}
