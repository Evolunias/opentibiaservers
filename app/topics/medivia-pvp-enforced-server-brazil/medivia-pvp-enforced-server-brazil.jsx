import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-brazil');
}

export default function MediviaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-brazil" />;
}
