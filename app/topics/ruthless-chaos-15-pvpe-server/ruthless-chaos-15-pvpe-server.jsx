import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-pvpe-server');
}

export default function RuthlessChaos15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-pvpe-server" />;
}
