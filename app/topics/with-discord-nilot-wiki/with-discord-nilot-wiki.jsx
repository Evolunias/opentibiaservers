import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-wiki');
}

export default function WithDiscordNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-wiki" />;
}
