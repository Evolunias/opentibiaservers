import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-france');
}

export default function MadnessaliveCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-france" />;
}
