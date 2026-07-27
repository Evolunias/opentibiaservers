import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-sweden');
}

export default function MadnessaliveBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-sweden" />;
}
