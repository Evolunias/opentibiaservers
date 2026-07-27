import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-argentina');
}

export default function MadnessaliveCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-argentina" />;
}
