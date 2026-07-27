import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rookgaard-tales-website');
}

export default function WithDiscordRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rookgaard-tales-website" />;
}
