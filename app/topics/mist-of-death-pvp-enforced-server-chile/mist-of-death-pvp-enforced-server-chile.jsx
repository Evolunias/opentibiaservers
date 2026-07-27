import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-chile');
}

export default function MistOfDeathPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-chile" />;
}
