import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-chile');
}

export default function NonPvpClientChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-chile" />;
}
