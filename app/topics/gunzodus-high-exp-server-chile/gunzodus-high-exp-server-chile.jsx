import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-chile');
}

export default function GunzodusHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-chile" />;
}
