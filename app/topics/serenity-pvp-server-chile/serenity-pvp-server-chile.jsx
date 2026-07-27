import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-chile');
}

export default function SerenityPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-chile" />;
}
