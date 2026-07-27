import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-mexico');
}

export default function BaiakIlusionRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-mexico" />;
}
