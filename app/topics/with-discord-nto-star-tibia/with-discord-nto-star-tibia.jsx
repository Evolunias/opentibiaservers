import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-tibia');
}

export default function WithDiscordNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-tibia" />;
}
