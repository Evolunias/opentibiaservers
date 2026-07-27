import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-usa');
}

export default function RuthlessChaosPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-usa" />;
}
