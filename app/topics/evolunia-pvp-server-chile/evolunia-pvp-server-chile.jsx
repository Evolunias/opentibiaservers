import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-chile');
}

export default function EvoluniaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-chile" />;
}
