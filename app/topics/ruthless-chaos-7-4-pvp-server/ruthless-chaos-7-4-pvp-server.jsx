import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-4-pvp-server');
}

export default function RuthlessChaos74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-4-pvp-server" />;
}
