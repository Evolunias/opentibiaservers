import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-chile');
}

export default function OxygenotNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-chile" />;
}
