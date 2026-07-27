import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-discord');
}

export default function OldSchoolGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-discord" />;
}
