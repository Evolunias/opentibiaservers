import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-ot-server');
}

export default function WithDiscordLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-ot-server" />;
}
