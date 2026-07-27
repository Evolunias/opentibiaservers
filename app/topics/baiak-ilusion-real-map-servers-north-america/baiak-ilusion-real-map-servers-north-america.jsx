import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-servers-north-america');
}

export default function BaiakIlusionRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-servers-north-america" />;
}
