import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-chile');
}

export default function ClassickDrakoriaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-chile" />;
}
