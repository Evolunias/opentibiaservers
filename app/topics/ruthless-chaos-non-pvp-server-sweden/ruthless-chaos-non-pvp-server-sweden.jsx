import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-sweden');
}

export default function RuthlessChaosNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-sweden" />;
}
