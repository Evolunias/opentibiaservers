import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-chile');
}

export default function SerenityBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-chile" />;
}
