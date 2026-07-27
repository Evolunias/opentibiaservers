import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-chile');
}

export default function NepreniaPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-chile" />;
}
