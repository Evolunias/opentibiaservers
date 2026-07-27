import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-guide');
}

export default function WithDiscordMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-guide" />;
}
