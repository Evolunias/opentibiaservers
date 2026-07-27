import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-europe');
}

export default function RuthlessChaosPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-europe" />;
}
