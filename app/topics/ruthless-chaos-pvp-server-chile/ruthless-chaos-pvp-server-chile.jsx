import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-chile');
}

export default function RuthlessChaosPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-chile" />;
}
