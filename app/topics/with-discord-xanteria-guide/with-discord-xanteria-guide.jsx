import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-guide');
}

export default function WithDiscordXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-guide" />;
}
