import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-guide');
}

export default function WithDiscordNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-guide" />;
}
