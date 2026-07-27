import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-wiki');
}

export default function PopularThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-wiki" />;
}
