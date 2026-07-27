import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-canada');
}

export default function PvpEnforcedRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-canada" />;
}
