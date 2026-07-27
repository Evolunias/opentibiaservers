import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-chile');
}

export default function GunzodusPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-chile" />;
}
