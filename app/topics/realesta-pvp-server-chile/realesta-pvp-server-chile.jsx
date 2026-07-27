import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-server-chile');
}

export default function RealestaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-server-chile" />;
}
