import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-argentina');
}

export default function RuthlessChaosBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-argentina" />;
}
