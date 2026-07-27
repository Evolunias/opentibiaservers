import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-germany');
}

export default function RuthlessChaosPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-germany" />;
}
