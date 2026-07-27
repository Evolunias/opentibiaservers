import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-uk');
}

export default function MadnessaliveNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-uk" />;
}
