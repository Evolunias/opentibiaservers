import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-sweden');
}

export default function MadnessalivePvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-sweden" />;
}
