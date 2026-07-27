import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-guide');
}

export default function WithDiscordRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-guide" />;
}
