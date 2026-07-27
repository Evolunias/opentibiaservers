import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-argentina');
}

export default function PvpEnforcedRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-argentina" />;
}
