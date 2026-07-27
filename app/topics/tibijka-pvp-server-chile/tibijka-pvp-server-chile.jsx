import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-chile');
}

export default function TibijkaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-chile" />;
}
