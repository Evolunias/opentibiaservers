import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-open-tibia');
}

export default function WithDiscordRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-open-tibia" />;
}
