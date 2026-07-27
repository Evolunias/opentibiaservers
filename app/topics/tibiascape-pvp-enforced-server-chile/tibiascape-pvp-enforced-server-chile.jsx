import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-chile');
}

export default function TibiascapePvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-chile" />;
}
