import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-ot-server');
}

export default function WithDiscordEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-ot-server" />;
}
