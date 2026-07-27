import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-wiki');
}

export default function WithDiscordArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-wiki" />;
}
