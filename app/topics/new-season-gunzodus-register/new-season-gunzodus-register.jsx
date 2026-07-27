import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-register');
}

export default function NewSeasonGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-register" />;
}
