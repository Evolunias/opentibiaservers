import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-germany');
}

export default function BaiakIlusionRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-germany" />;
}
