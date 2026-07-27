import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-sweden');
}

export default function MadnessaliveCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-sweden" />;
}
