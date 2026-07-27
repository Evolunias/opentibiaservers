import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-wiki');
}

export default function TopNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-wiki" />;
}
