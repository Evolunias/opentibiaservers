import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-south-america');
}

export default function OtmadnessRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-south-america" />;
}
