import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-chile');
}

export default function PvpServerListChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-chile" />;
}
