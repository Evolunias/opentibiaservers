import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-latin-america');
}

export default function MadnessaliveCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-latin-america" />;
}
