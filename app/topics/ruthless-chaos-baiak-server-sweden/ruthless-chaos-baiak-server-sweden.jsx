import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-sweden');
}

export default function RuthlessChaosBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-sweden" />;
}
