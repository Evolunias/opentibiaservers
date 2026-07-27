import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-wiki');
}

export default function WithDiscordEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-wiki" />;
}
