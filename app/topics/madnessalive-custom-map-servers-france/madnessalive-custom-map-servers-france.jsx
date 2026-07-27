import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-france');
}

export default function MadnessaliveCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-france" />;
}
