import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-servers-brazil');
}

export default function OtmadnessCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-servers-brazil" />;
}
