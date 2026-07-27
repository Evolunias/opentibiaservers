import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-open-tibia');
}

export default function WithDiscordNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-open-tibia" />;
}
