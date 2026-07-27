import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-tibia');
}

export default function WithDiscordRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-tibia" />;
}
