import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-guide');
}

export default function WithDiscordThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-guide" />;
}
