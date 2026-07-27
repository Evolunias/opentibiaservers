import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-uk');
}

export default function RuthlessChaosNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-uk" />;
}
