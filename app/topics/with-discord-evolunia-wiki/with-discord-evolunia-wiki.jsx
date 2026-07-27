import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-wiki');
}

export default function WithDiscordEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-wiki" />;
}
