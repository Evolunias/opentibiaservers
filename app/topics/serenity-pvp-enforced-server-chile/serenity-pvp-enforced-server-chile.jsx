import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-enforced-server-chile');
}

export default function SerenityPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-enforced-server-chile" />;
}
