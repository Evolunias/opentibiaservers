import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-wiki');
}

export default function WithDiscordTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-wiki" />;
}
