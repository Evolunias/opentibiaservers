import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rookgaard-tales-client');
}

export default function WithDiscordRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rookgaard-tales-client" />;
}
