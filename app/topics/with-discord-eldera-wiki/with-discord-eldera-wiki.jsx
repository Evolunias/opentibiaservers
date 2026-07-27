import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-wiki');
}

export default function WithDiscordElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-wiki" />;
}
