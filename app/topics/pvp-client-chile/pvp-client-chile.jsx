import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-chile');
}

export default function PvpClientChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-chile" />;
}
