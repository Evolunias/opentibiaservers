import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-login');
}

export default function WithDiscordMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-login" />;
}
