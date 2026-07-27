import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-poland');
}

export default function MediviaPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-poland" />;
}
