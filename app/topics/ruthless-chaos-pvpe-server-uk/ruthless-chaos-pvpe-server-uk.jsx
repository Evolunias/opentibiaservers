import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-uk');
}

export default function RuthlessChaosPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-uk" />;
}
