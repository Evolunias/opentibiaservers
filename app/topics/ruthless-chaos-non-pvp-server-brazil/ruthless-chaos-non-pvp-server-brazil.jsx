import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-brazil');
}

export default function RuthlessChaosNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-brazil" />;
}
