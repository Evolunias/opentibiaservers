import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-open-tibia');
}

export default function WithDiscordOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-open-tibia" />;
}
