import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-tibia');
}

export default function WithDiscordGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-tibia" />;
}
