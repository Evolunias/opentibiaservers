import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-guide');
}

export default function WithDiscordAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-guide" />;
}
