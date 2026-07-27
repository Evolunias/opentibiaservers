import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani-wiki');
}

export default function WithDiscordRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani-wiki" />;
}
