import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-wiki');
}

export default function HighrateLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-wiki" />;
}
