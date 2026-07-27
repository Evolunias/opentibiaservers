import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-germany');
}

export default function MediviaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-germany" />;
}
