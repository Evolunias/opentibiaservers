import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-tibia');
}

export default function WithDiscordOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-tibia" />;
}
