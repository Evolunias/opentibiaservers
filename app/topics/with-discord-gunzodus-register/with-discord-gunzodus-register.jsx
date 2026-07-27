import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-register');
}

export default function WithDiscordGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-register" />;
}
