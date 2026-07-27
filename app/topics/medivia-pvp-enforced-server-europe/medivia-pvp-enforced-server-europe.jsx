import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-europe');
}

export default function MediviaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-europe" />;
}
