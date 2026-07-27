import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-server-germany');
}

export default function MadnessaliveRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-server-germany" />;
}
