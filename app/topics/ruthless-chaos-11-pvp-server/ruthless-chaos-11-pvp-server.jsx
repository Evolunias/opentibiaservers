import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-pvp-server');
}

export default function RuthlessChaos11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-pvp-server" />;
}
