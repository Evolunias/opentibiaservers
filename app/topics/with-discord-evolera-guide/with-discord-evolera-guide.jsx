import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-guide');
}

export default function WithDiscordEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-guide" />;
}
