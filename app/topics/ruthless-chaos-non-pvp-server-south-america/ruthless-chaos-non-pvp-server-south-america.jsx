import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-south-america');
}

export default function RuthlessChaosNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-south-america" />;
}
