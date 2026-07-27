import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-server');
}

export default function WithDiscordMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-server" />;
}
