import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-north-america');
}

export default function RuthlessChaosNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-north-america" />;
}
