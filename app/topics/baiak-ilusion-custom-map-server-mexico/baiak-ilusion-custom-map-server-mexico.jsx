import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-mexico');
}

export default function BaiakIlusionCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-mexico" />;
}
