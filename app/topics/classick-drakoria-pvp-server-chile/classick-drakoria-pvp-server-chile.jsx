import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-chile');
}

export default function ClassickDrakoriaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-chile" />;
}
