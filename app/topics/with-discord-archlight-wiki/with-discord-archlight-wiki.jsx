import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-wiki');
}

export default function WithDiscordArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-wiki" />;
}
