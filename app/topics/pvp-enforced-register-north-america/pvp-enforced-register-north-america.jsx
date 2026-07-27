import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-north-america');
}

export default function PvpEnforcedRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-north-america" />;
}
