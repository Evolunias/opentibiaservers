import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-pvpe-server');
}

export default function RuthlessChaos11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-pvpe-server" />;
}
