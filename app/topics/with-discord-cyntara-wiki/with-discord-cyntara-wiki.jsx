import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-wiki');
}

export default function WithDiscordCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-wiki" />;
}
