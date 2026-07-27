import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-online');
}

export default function OldSchoolGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-online" />;
}
