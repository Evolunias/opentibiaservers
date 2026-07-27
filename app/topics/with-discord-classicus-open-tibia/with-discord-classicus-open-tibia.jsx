import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-open-tibia');
}

export default function WithDiscordClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-open-tibia" />;
}
