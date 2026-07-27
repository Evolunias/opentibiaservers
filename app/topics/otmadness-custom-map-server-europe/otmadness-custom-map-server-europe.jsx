import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-europe');
}

export default function OtmadnessCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-europe" />;
}
