import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-guide');
}

export default function WithDiscordTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-guide" />;
}
