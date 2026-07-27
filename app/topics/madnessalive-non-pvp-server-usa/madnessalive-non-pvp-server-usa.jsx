import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-usa');
}

export default function MadnessaliveNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-usa" />;
}
