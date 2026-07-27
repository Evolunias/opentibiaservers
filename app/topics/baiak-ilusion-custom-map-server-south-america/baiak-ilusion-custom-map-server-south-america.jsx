import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-south-america');
}

export default function BaiakIlusionCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-south-america" />;
}
