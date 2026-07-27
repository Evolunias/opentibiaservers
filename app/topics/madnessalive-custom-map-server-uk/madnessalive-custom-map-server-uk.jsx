import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-uk');
}

export default function MadnessaliveCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-uk" />;
}
