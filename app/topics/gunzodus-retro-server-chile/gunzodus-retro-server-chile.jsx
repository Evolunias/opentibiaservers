import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-chile');
}

export default function GunzodusRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-chile" />;
}
