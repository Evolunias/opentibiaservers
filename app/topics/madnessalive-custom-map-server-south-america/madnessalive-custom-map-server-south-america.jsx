import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-south-america');
}

export default function MadnessaliveCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-south-america" />;
}
