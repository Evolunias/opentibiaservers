import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-chile');
}

export default function RubinotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-chile" />;
}
