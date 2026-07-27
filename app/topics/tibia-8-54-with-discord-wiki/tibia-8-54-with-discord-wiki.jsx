import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-discord-wiki');
}

export default function Tibia854WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-discord-wiki" />;
}
