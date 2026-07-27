import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-baiak-ilusion-wiki');
}

export default function WithDiscordBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-baiak-ilusion-wiki" />;
}
