import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rookgaard-tales-official');
}

export default function WithDiscordRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rookgaard-tales-official" />;
}
