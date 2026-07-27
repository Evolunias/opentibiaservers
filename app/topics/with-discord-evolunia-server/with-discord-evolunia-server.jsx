import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-server');
}

export default function WithDiscordEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-server" />;
}
