import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-non-pvp-server-chile');
}

export default function RealestaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-non-pvp-server-chile" />;
}
