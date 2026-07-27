import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-poland');
}

export default function RuthlessChaosBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-poland" />;
}
