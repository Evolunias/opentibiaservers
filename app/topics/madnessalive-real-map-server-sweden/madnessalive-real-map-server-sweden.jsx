import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-real-map-server-sweden');
}

export default function MadnessaliveRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-real-map-server-sweden" />;
}
