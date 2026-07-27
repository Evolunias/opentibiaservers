import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-server');
}

export default function WithDiscordClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-server" />;
}
