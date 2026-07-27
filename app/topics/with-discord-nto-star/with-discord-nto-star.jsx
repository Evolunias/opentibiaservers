import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star');
}

export default function WithDiscordNtoStarKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star" />;
}
