import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-canada');
}

export default function MadnessaliveCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-canada" />;
}
