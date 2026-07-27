import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-chile');
}

export default function PvpEnforcedOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-chile" />;
}
