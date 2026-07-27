import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-chile');
}

export default function TibiantisPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-chile" />;
}
