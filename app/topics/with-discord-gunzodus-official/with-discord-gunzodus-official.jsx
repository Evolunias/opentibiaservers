import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-official');
}

export default function WithDiscordGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-official" />;
}
