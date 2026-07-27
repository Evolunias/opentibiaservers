import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-guide');
}

export default function WithDiscordTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-guide" />;
}
