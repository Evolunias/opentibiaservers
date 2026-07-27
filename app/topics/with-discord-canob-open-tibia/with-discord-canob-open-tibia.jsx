import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-open-tibia');
}

export default function WithDiscordCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-open-tibia" />;
}
