import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-argentina');
}

export default function OtmadnessCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-argentina" />;
}
