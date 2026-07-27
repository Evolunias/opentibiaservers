import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-client');
}

export default function WithDiscordMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-client" />;
}
