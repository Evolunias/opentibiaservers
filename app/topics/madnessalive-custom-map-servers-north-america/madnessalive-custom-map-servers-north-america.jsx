import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-north-america');
}

export default function MadnessaliveCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-north-america" />;
}
