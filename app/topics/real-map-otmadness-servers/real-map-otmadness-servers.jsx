import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-servers');
}

export default function RealMapOtmadnessServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-servers" />;
}
