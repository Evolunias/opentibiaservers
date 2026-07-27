import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-france');
}

export default function BaiakIlusionRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-france" />;
}
