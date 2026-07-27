import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-wiki');
}

export default function WithDiscordNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-wiki" />;
}
