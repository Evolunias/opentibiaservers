import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-sweden');
}

export default function MediviaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-sweden" />;
}
