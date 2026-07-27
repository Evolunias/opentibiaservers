import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-non-pvp-server');
}

export default function RuthlessChaos13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-non-pvp-server" />;
}
