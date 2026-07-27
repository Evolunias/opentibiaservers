import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-discord-wiki');
}

export default function Tibia100WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-discord-wiki" />;
}
