import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-uk');
}

export default function OtmadnessCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-uk" />;
}
