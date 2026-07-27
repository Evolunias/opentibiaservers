import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-sweden');
}

export default function MadnessaliveEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-sweden" />;
}
