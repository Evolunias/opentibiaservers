import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-discord-wiki');
}

export default function Tibia14WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-discord-wiki" />;
}
