import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-open-tibia');
}

export default function WithDiscordRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-open-tibia" />;
}
