import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-guide');
}

export default function WithDiscordThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-guide" />;
}
