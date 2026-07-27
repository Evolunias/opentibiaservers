import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-brazil');
}

export default function PvpEnforcedRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-brazil" />;
}
