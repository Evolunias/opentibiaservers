import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-1-pvp-server');
}

export default function RuthlessChaos71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-1-pvp-server" />;
}
