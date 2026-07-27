import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-chile');
}

export default function GunzodusLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-chile" />;
}
