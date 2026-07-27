import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-register');
}

export default function PvpEnforcedOtServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-register" />;
}
