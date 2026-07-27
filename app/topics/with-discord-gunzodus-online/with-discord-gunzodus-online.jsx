import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-online');
}

export default function WithDiscordGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-online" />;
}
