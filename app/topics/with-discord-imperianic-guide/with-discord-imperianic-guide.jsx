import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-guide');
}

export default function WithDiscordImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-guide" />;
}
