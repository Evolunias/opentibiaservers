import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-server-canada');
}

export default function MadnessaliveRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-server-canada" />;
}
