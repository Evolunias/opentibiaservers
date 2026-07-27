import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rookgaard-tales-server');
}

export default function WithDiscordRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rookgaard-tales-server" />;
}
