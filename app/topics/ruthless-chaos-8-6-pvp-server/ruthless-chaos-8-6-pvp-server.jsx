import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-6-pvp-server');
}

export default function RuthlessChaos86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-6-pvp-server" />;
}
