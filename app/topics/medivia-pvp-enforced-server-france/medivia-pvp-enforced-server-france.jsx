import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-france');
}

export default function MediviaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-france" />;
}
