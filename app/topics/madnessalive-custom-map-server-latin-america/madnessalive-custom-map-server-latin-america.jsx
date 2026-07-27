import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-latin-america');
}

export default function MadnessaliveCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-latin-america" />;
}
