import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-sweden');
}

export default function RuthlessChaosPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-sweden" />;
}
