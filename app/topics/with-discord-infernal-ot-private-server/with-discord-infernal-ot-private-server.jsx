import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-private-server');
}

export default function WithDiscordInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-private-server" />;
}
