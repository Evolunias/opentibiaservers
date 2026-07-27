import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-poland');
}

export default function BaiakIlusionCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-poland" />;
}
