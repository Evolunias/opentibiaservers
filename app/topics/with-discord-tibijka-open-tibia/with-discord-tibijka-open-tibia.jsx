import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-open-tibia');
}

export default function WithDiscordTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-open-tibia" />;
}
