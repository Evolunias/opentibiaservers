import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rookgaard-tales-guide');
}

export default function WithDiscordRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rookgaard-tales-guide" />;
}
