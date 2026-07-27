import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-north-america');
}

export default function BaiakIlusionCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-north-america" />;
}
