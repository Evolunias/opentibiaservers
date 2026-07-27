import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-poland');
}

export default function BaiakIlusionRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-poland" />;
}
