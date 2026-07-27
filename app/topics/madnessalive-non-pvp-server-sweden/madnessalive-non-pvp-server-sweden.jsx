import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-sweden');
}

export default function MadnessaliveNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-sweden" />;
}
