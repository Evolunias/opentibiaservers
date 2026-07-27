import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-argentina');
}

export default function OtmadnessRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-argentina" />;
}
