import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-mexico');
}

export default function MediviaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-mexico" />;
}
