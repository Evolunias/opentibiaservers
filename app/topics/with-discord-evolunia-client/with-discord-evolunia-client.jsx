import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-client');
}

export default function WithDiscordEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-client" />;
}
