import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-brazil');
}

export default function MadnessaliveCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-brazil" />;
}
