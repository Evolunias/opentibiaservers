import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-wiki');
}

export default function PopularCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-wiki" />;
}
