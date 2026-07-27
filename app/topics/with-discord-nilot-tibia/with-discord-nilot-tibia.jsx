import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-tibia');
}

export default function WithDiscordNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-tibia" />;
}
