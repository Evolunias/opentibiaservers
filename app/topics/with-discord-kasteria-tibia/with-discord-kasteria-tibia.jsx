import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-tibia');
}

export default function WithDiscordKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-tibia" />;
}
