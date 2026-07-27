import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-argentina');
}

export default function OtmadnessRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-argentina" />;
}
