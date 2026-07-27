import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-server-france');
}

export default function MadnessaliveRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-server-france" />;
}
