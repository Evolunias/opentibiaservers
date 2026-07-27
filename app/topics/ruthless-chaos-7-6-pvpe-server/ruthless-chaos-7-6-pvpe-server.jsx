import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-6-pvpe-server');
}

export default function RuthlessChaos76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-6-pvpe-server" />;
}
