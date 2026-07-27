import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-germany');
}

export default function RuthlessChaosBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-germany" />;
}
