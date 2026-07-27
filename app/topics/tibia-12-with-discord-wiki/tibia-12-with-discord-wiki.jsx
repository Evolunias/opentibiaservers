import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-discord-wiki');
}

export default function Tibia12WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-discord-wiki" />;
}
