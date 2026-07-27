import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-canada');
}

export default function BaiakIlusionCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-canada" />;
}
