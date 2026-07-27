import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-wiki');
}

export default function WithDiscordThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-wiki" />;
}
