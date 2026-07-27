import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-europe');
}

export default function BaiakIlusionCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-europe" />;
}
