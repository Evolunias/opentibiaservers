import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-uk');
}

export default function RuthlessChaosBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-uk" />;
}
