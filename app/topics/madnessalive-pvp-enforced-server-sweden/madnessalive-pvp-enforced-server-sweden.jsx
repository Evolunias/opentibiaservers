import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-enforced-server-sweden');
}

export default function MadnessalivePvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-enforced-server-sweden" />;
}
