import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-servers-france');
}

export default function BaiakIlusionRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-servers-france" />;
}
