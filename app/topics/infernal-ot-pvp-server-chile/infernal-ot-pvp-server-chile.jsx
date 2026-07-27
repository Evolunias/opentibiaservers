import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-chile');
}

export default function InfernalOtPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-chile" />;
}
