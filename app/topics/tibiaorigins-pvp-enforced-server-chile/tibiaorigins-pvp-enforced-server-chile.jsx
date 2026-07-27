import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-enforced-server-chile');
}

export default function TibiaoriginsPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-enforced-server-chile" />;
}
