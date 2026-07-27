import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-wiki');
}

export default function WithDiscordShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-wiki" />;
}
