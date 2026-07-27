import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-open-tibia');
}

export default function WithDiscordGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-open-tibia" />;
}
