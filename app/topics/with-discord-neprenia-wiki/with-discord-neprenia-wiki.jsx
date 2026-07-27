import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-wiki');
}

export default function WithDiscordNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-wiki" />;
}
