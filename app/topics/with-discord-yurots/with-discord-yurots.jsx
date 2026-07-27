import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots');
}

export default function WithDiscordYurotsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots" />;
}
