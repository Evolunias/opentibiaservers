import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-wiki');
}

export default function WithDiscordCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-wiki" />;
}
