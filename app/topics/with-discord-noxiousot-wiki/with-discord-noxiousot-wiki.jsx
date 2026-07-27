import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-wiki');
}

export default function WithDiscordNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-wiki" />;
}
