import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-wiki');
}

export default function WithDiscordLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-wiki" />;
}
