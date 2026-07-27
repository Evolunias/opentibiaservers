import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-login');
}

export default function WithDiscordOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-login" />;
}
