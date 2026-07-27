import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-open-tibia');
}

export default function WithDiscordArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-open-tibia" />;
}
