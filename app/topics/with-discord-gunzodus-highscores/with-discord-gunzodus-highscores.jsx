import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-highscores');
}

export default function WithDiscordGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-highscores" />;
}
