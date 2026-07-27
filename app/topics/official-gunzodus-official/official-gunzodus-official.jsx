import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-official');
}

export default function OfficialGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-official" />;
}
