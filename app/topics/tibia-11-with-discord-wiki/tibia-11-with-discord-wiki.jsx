import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-discord-wiki');
}

export default function Tibia11WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-discord-wiki" />;
}
