import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-chile');
}

export default function ClassicusPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-chile" />;
}
