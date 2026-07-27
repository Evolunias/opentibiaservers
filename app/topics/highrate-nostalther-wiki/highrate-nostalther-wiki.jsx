import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-wiki');
}

export default function HighrateNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-wiki" />;
}
