import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-client');
}

export default function WithDiscordArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-client" />;
}
