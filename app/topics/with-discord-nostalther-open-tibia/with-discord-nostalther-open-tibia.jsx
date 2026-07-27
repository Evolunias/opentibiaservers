import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-open-tibia');
}

export default function WithDiscordNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-open-tibia" />;
}
