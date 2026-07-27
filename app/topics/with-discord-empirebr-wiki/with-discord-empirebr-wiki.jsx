import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-wiki');
}

export default function WithDiscordEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-wiki" />;
}
