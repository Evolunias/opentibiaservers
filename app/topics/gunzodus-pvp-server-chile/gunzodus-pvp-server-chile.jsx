import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-chile');
}

export default function GunzodusPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-chile" />;
}
