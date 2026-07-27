import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-chile');
}

export default function EvoluniaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-chile" />;
}
