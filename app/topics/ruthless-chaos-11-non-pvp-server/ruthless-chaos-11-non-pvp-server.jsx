import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-non-pvp-server');
}

export default function RuthlessChaos11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-non-pvp-server" />;
}
