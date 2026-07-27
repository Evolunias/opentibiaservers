import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-ots');
}

export default function WithDiscordCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-ots" />;
}
