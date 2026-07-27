import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-europe');
}

export default function PvpEnforcedRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-europe" />;
}
