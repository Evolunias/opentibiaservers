import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-wiki');
}

export default function WithDiscordMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-wiki" />;
}
