import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-usa');
}

export default function BaiakIlusionCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-usa" />;
}
