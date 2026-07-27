import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-south-america');
}

export default function PvpEnforcedRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-south-america" />;
}
