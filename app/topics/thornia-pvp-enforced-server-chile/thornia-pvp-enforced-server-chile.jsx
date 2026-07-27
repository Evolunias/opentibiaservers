import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-enforced-server-chile');
}

export default function ThorniaPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-enforced-server-chile" />;
}
