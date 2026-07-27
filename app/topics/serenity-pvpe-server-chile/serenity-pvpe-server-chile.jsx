import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-chile');
}

export default function SerenityPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-chile" />;
}
