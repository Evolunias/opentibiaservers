import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-wiki');
}

export default function WithDiscordGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-wiki" />;
}
