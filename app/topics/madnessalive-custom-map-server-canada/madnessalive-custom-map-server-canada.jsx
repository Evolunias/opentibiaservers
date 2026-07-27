import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-canada');
}

export default function MadnessaliveCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-canada" />;
}
