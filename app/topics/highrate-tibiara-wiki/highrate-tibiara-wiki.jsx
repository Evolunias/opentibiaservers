import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-wiki');
}

export default function HighrateTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-wiki" />;
}
