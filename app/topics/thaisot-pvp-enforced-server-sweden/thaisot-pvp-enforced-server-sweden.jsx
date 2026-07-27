import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-sweden');
}

export default function ThaisotPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-sweden" />;
}
