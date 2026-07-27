import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-wiki');
}

export default function WithDiscordCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-wiki" />;
}
