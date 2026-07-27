import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-germany');
}

export default function OtmadnessRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-germany" />;
}
