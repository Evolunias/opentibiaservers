import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-france');
}

export default function BaiakIlusionCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-france" />;
}
