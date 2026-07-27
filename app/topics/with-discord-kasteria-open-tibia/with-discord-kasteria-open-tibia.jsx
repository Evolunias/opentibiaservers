import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-open-tibia');
}

export default function WithDiscordKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-open-tibia" />;
}
