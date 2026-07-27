import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-south-america');
}

export default function OtmadnessCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-south-america" />;
}
