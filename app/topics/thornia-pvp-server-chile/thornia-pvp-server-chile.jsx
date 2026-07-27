import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-chile');
}

export default function ThorniaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-chile" />;
}
