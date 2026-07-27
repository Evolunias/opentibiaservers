import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-poland');
}

export default function RuthlessChaosNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-poland" />;
}
