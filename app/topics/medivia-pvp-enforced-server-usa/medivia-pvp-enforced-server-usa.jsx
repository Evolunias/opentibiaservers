import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-usa');
}

export default function MediviaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-usa" />;
}
