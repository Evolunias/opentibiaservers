import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-forum');
}

export default function WithDiscordGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-forum" />;
}
