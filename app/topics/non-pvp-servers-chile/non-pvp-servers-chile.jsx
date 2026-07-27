import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-chile');
}

export default function NonPvpServersChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-chile" />;
}
