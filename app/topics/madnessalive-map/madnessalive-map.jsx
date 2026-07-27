import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-map');
}

export default function MadnessaliveMapKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-map" />;
}
