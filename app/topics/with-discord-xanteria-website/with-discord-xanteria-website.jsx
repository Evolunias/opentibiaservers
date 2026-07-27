import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-website');
}

export default function WithDiscordXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-website" />;
}
