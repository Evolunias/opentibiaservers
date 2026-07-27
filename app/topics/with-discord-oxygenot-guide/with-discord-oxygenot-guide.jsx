import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-guide');
}

export default function WithDiscordOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-guide" />;
}
