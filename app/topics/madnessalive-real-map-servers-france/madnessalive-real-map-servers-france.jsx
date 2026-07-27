import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-servers-france');
}

export default function MadnessaliveRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-servers-france" />;
}
