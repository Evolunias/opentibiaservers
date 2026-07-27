import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-north-america');
}

export default function BaiakIlusionCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-north-america" />;
}
