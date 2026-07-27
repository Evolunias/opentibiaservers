import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-chile');
}

export default function ThaisotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-chile" />;
}
