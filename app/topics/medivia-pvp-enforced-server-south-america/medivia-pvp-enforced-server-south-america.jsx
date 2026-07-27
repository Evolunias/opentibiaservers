import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-south-america');
}

export default function MediviaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-south-america" />;
}
