import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-wiki');
}

export default function WithDiscordHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-wiki" />;
}
