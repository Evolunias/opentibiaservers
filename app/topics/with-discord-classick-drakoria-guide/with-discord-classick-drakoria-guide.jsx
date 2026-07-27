import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-guide');
}

export default function WithDiscordClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-guide" />;
}
