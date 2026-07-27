import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-ot-server');
}

export default function WithDiscordXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-ot-server" />;
}
