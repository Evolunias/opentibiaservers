import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-sweden');
}

export default function PvpEnforcedRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-sweden" />;
}
