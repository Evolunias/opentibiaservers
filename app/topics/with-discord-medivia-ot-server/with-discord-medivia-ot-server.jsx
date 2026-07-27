import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-ot-server');
}

export default function WithDiscordMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-ot-server" />;
}
