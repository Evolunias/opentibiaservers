import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-usa');
}

export default function MadnessaliveCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-usa" />;
}
