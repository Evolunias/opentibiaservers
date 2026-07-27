import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-open-tibia');
}

export default function WithDiscordMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-open-tibia" />;
}
