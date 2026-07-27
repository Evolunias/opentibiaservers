import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-chile');
}

export default function ClassicusNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-chile" />;
}
