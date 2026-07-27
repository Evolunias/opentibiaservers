import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-tibia');
}

export default function WithDiscordArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-tibia" />;
}
