import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-server-poland');
}

export default function MadnessaliveRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-server-poland" />;
}
