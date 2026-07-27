import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-servers-germany');
}

export default function OtmadnessCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-servers-germany" />;
}
