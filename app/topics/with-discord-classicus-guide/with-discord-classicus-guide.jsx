import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-guide');
}

export default function WithDiscordClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-guide" />;
}
