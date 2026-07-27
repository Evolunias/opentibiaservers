import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-usa');
}

export default function BaiakIlusionRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-usa" />;
}
