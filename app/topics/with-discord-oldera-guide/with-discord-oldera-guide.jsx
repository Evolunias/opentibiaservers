import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-guide');
}

export default function WithDiscordOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-guide" />;
}
