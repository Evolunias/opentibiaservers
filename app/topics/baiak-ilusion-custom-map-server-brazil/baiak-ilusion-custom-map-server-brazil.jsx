import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-brazil');
}

export default function BaiakIlusionCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-brazil" />;
}
