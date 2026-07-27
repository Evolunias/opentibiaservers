import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-72-non-pvp-server');
}

export default function RuthlessChaos772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-72-non-pvp-server" />;
}
