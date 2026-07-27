import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-chile');
}

export default function NonPvpServerListChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-chile" />;
}
