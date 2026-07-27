import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-chile');
}

export default function GunzodusOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-chile" />;
}
