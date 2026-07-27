import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-chile');
}

export default function ShadowcoresPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-chile" />;
}
