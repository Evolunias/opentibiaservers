import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-website');
}

export default function WithDiscordMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-website" />;
}
