import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-discord-wiki');
}

export default function Tibia96WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-discord-wiki" />;
}
