import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-server');
}

export default function WithDiscordAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-server" />;
}
