import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-wiki');
}

export default function PopularNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-wiki" />;
}
