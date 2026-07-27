import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-open-tibia');
}

export default function WithDiscordImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-open-tibia" />;
}
