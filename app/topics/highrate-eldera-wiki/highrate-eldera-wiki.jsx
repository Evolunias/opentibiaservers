import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-wiki');
}

export default function HighrateElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-wiki" />;
}
