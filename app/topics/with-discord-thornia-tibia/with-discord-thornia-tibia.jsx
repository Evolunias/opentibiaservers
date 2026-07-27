import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-tibia');
}

export default function WithDiscordThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-tibia" />;
}
