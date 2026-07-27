import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-chile');
}

export default function RealeraPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-chile" />;
}
