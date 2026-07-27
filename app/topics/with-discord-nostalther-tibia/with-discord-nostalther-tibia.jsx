import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-tibia');
}

export default function WithDiscordNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-tibia" />;
}
