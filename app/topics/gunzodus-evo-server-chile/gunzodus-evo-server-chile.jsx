import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-chile');
}

export default function GunzodusEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-chile" />;
}
