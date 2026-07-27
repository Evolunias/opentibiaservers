import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-france');
}

export default function PvpEnforcedRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-france" />;
}
