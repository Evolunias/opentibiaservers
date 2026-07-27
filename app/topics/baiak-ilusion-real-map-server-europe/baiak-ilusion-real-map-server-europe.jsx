import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-europe');
}

export default function BaiakIlusionRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-europe" />;
}
