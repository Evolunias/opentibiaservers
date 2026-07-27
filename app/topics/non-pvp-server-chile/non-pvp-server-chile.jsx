import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-chile');
}

export default function NonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-chile" />;
}
