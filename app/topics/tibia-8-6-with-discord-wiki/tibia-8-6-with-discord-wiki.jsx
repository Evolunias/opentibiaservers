import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-discord-wiki');
}

export default function Tibia86WithDiscordWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-discord-wiki" />;
}
