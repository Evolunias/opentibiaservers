import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-login');
}

export default function WithDiscordCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-login" />;
}
