import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-wiki');
}

export default function WithDiscordMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-wiki" />;
}
