import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-chile');
}

export default function PvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-chile" />;
}
