import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zunera-ot-wiki');
}

export default function WithDiscordZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zunera-ot-wiki" />;
}
