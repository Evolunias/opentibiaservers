import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-0-pvpe-server');
}

export default function RuthlessChaos80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-0-pvpe-server" />;
}
