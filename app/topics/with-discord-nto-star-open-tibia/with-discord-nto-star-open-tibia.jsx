import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-open-tibia');
}

export default function WithDiscordNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-open-tibia" />;
}
