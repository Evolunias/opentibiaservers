import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-argentina');
}

export default function RuthlessChaosNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-argentina" />;
}
