import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-wiki');
}

export default function WithDiscordUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-wiki" />;
}
