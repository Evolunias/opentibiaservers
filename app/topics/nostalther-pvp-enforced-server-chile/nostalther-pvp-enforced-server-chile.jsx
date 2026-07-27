import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-chile');
}

export default function NostaltherPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-chile" />;
}
