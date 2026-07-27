import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-mexico');
}

export default function RuthlessChaosPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-mexico" />;
}
