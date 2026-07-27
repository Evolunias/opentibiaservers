import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-argentina');
}

export default function MediviaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-argentina" />;
}
