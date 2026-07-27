import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-north-america');
}

export default function MadnessaliveCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-north-america" />;
}
