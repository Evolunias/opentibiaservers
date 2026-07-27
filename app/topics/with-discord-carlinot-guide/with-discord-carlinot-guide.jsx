import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-guide');
}

export default function WithDiscordCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-guide" />;
}
