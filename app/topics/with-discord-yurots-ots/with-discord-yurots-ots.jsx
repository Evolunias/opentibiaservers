import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-ots');
}

export default function WithDiscordYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-ots" />;
}
