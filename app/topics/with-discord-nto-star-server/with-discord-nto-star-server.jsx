import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-server');
}

export default function WithDiscordNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-server" />;
}
