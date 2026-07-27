import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-client');
}

export default function WithDiscordClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-client" />;
}
