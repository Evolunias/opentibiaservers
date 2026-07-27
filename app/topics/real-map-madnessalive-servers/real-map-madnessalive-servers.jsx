import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-madnessalive-servers');
}

export default function RealMapMadnessaliveServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-madnessalive-servers" />;
}
