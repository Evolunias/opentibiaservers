import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-private-server');
}

export default function WithDiscordHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-private-server" />;
}
