import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-poland');
}

export default function MadnessaliveNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-poland" />;
}
