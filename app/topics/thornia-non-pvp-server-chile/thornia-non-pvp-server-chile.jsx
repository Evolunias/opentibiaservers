import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-chile');
}

export default function ThorniaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-chile" />;
}
