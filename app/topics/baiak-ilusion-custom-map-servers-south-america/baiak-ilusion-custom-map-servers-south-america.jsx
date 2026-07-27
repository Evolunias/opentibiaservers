import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-south-america');
}

export default function BaiakIlusionCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-south-america" />;
}
