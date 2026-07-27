import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-guide');
}

export default function WithDiscordKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-guide" />;
}
