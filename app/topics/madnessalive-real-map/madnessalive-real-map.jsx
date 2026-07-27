import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map');
}

export default function MadnessaliveRealMapKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map" />;
}
