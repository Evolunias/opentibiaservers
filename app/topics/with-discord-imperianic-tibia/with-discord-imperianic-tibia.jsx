import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-tibia');
}

export default function WithDiscordImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-tibia" />;
}
