import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-enforced-server-chile');
}

export default function NilotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-enforced-server-chile" />;
}
