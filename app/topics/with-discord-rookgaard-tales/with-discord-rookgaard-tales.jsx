import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rookgaard-tales');
}

export default function WithDiscordRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rookgaard-tales" />;
}
