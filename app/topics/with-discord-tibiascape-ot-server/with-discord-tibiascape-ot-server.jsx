import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-ot-server');
}

export default function WithDiscordTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-ot-server" />;
}
