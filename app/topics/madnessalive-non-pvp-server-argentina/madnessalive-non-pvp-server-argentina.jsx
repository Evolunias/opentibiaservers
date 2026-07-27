import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-argentina');
}

export default function MadnessaliveNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-argentina" />;
}
