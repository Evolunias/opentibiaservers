import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-chile');
}

export default function RubinotNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-chile" />;
}
