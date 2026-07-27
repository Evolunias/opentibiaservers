import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-brazil');
}

export default function RuthlessChaosPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-brazil" />;
}
