import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-non-pvp-server-chile');
}

export default function ElderaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-non-pvp-server-chile" />;
}
