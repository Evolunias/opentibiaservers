import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-france');
}

export default function BaiakIlusionCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-france" />;
}
