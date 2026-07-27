import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-wiki');
}

export default function WithDiscordTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-wiki" />;
}
