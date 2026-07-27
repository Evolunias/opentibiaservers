import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-uk');
}

export default function MediviaPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-uk" />;
}
