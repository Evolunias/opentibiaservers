import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-sweden');
}

export default function RuthlessChaosPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-sweden" />;
}
