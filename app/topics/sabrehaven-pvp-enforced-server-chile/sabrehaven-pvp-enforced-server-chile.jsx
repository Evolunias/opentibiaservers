import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-chile');
}

export default function SabrehavenPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-chile" />;
}
