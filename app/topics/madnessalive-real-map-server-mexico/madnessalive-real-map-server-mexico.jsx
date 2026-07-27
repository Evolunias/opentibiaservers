import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-server-mexico');
}

export default function MadnessaliveRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-server-mexico" />;
}
