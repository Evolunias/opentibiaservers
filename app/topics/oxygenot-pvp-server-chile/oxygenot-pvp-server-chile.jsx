import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-chile');
}

export default function OxygenotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-chile" />;
}
