import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-discord-wiki');
}

export default function Tibia81WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-discord-wiki" />;
}
