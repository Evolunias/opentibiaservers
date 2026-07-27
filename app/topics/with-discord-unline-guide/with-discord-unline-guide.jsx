import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-guide');
}

export default function WithDiscordUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-guide" />;
}
