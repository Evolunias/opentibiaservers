import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-servers-south-america');
}

export default function OtmadnessCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-servers-south-america" />;
}
