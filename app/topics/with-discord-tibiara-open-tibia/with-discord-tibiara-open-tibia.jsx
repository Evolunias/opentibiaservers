import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-open-tibia');
}

export default function WithDiscordTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-open-tibia" />;
}
