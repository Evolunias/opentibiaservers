import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-germany');
}

export default function MadnessaliveNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-germany" />;
}
