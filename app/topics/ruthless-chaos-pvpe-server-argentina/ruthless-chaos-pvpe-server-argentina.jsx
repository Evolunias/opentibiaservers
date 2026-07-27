import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-argentina');
}

export default function RuthlessChaosPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-argentina" />;
}
