import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-brazil');
}

export default function OtmadnessRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-brazil" />;
}
