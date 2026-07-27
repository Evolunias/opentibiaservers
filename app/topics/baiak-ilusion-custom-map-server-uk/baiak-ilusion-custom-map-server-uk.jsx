import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-uk');
}

export default function BaiakIlusionCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-uk" />;
}
