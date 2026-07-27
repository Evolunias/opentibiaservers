import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-client');
}

export default function WithDiscordYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-client" />;
}
