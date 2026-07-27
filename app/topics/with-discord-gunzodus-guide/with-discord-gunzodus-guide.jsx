import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-guide');
}

export default function WithDiscordGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-guide" />;
}
