import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-usa');
}

export default function BaiakIlusionCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-usa" />;
}
