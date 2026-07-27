import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-discord-wiki');
}

export default function Tibia15WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-discord-wiki" />;
}
