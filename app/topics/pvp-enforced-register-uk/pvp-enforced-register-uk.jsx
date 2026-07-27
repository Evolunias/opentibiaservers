import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-uk');
}

export default function PvpEnforcedRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-uk" />;
}
