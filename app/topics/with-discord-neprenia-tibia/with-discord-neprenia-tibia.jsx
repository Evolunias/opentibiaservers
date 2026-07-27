import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-tibia');
}

export default function WithDiscordNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-tibia" />;
}
