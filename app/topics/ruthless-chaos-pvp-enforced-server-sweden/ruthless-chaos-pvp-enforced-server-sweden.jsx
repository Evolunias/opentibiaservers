import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-enforced-server-sweden');
}

export default function RuthlessChaosPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-enforced-server-sweden" />;
}
