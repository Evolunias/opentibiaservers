import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-pvpe-server');
}

export default function RuthlessChaos13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-pvpe-server" />;
}
