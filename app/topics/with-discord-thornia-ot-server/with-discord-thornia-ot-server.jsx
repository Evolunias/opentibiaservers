import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-ot-server');
}

export default function WithDiscordThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-ot-server" />;
}
