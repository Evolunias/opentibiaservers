import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-official');
}

export default function NoResetGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-official" />;
}
