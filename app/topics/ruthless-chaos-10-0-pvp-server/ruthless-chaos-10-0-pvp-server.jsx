import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-pvp-server');
}

export default function RuthlessChaos100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-pvp-server" />;
}
