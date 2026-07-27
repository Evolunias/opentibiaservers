import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-usa');
}

export default function RuthlessChaosNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-usa" />;
}
