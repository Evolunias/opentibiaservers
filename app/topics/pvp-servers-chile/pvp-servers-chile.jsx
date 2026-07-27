import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-chile');
}

export default function PvpServersChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-chile" />;
}
