import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-chile');
}

export default function InfernalOtNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-chile" />;
}
