import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-chile');
}

export default function GunzodusNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-chile" />;
}
