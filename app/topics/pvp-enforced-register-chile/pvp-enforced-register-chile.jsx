import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-register-chile');
}

export default function PvpEnforcedRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-register-chile" />;
}
