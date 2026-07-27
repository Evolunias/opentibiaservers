import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-germany');
}

export default function BaiakIlusionCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-germany" />;
}
