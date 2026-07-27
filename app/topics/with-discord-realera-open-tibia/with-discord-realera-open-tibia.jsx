import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-open-tibia');
}

export default function WithDiscordRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-open-tibia" />;
}
