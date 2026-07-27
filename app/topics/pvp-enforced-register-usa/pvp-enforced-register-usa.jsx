import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-usa');
}

export default function PvpEnforcedRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-usa" />;
}
