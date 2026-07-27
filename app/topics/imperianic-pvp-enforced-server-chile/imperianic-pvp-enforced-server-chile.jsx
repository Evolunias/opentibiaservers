import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-chile');
}

export default function ImperianicPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-chile" />;
}
