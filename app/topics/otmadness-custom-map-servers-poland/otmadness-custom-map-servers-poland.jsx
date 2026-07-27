import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-servers-poland');
}

export default function OtmadnessCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-servers-poland" />;
}
