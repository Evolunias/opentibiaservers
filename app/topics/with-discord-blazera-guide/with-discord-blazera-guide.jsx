import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-guide');
}

export default function WithDiscordBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-guide" />;
}
