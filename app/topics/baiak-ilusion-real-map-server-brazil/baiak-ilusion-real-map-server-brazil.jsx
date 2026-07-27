import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-brazil');
}

export default function BaiakIlusionRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-brazil" />;
}
