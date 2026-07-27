import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-germany');
}

export default function PvpEnforcedRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-germany" />;
}
