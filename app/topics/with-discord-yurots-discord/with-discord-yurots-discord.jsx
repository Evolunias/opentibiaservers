import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-discord');
}

export default function WithDiscordYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-discord" />;
}
