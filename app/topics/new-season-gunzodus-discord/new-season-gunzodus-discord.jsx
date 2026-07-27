import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-discord');
}

export default function NewSeasonGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-discord" />;
}
