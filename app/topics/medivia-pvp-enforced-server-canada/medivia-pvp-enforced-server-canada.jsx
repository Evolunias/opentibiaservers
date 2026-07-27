import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-canada');
}

export default function MediviaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-canada" />;
}
