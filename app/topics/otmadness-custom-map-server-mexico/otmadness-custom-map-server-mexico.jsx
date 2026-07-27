import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-mexico');
}

export default function OtmadnessCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-mexico" />;
}
