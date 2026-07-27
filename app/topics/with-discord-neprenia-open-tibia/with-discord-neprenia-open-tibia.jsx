import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-open-tibia');
}

export default function WithDiscordNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-open-tibia" />;
}
