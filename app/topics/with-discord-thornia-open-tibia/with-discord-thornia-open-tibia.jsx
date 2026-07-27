import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-open-tibia');
}

export default function WithDiscordThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-open-tibia" />;
}
