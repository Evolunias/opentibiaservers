import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-poland');
}

export default function RuthlessChaosPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-poland" />;
}
