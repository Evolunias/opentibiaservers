import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-poland');
}

export default function OtmadnessCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-poland" />;
}
