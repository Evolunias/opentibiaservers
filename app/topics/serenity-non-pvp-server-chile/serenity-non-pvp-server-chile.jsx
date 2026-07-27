import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-chile');
}

export default function SerenityNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-chile" />;
}
