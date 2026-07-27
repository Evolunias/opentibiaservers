import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-servers-mexico');
}

export default function MadnessaliveCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-servers-mexico" />;
}
