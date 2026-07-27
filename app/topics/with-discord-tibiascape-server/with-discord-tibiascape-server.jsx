import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-server');
}

export default function WithDiscordTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-server" />;
}
