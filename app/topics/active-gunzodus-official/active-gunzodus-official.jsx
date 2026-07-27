import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-official');
}

export default function ActiveGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-official" />;
}
