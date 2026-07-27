import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-brazil');
}

export default function RuthlessChaosBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-brazil" />;
}
