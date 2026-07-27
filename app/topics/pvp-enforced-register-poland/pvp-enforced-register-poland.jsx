import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-poland');
}

export default function PvpEnforcedRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-poland" />;
}
