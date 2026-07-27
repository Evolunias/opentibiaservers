import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-mexico');
}

export default function RuthlessChaosNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-mexico" />;
}
