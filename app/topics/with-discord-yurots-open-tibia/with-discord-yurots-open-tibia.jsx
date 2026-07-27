import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-open-tibia');
}

export default function WithDiscordYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-open-tibia" />;
}
