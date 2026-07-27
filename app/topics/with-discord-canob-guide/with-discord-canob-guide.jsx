import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-guide');
}

export default function WithDiscordCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-guide" />;
}
