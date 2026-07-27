import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-discord-wiki');
}

export default function Tibia71WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-discord-wiki" />;
}
