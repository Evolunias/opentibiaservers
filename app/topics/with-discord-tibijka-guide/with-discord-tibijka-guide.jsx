import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-guide');
}

export default function WithDiscordTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-guide" />;
}
