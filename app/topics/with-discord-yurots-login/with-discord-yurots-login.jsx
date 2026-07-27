import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-login');
}

export default function WithDiscordYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-login" />;
}
