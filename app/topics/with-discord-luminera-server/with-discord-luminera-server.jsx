import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-server');
}

export default function WithDiscordLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-server" />;
}
