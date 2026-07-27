import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-ot-server');
}

export default function WithDiscordRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-ot-server" />;
}
