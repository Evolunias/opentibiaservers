import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-non-pvp-server');
}

export default function RuthlessChaos100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-non-pvp-server" />;
}
