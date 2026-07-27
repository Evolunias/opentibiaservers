import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-chile');
}

export default function TibijkaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-chile" />;
}
